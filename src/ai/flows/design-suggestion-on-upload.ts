'use server';

/**
 * @fileOverview Provides AI-powered design suggestions based on an uploaded image.
 *
 * - `getDesignSuggestions` -  A function that takes an image data URI and returns design suggestions.
 * - `DesignSuggestionInput` - The input type for `getDesignSuggestions`.
 * - `DesignSuggestionOutput` - The output type for `getDesignSuggestions`.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignSuggestionInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A photo to be analyzed for color and design element suggestions, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type DesignSuggestionInput = z.infer<typeof DesignSuggestionInputSchema>;

const DesignSuggestionOutputSchema = z.object({
  colorPalette: z
    .array(z.string())
    .describe('An array of suggested complementary colors in hex format.'),
  designElements: z
    .string()
    .describe(
      'A description of suggested design elements that would complement the image.'
    ),
});
export type DesignSuggestionOutput = z.infer<typeof DesignSuggestionOutputSchema>;

export async function getDesignSuggestions(
  input: DesignSuggestionInput
): Promise<DesignSuggestionOutput> {
  return designSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designSuggestionPrompt',
  input: {schema: DesignSuggestionInputSchema},
  output: {schema: DesignSuggestionOutputSchema},
  prompt: `You are a design assistant that provides design suggestions based on an image.

You will analyze the image provided and suggest a complementary color palette (in hex format) and design elements to enhance personalized products.

Analyze the following image:

{{media url=imageDataUri}}

Provide a complementary color palette and design elements that would enhance personalized products incorporating the image.`,
});

const designSuggestionFlow = ai.defineFlow(
  {
    name: 'designSuggestionFlow',
    inputSchema: DesignSuggestionInputSchema,
    outputSchema: DesignSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
