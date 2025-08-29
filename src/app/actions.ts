'use server';

import { getDesignSuggestions } from '@/ai/flows/design-suggestion-on-upload';

export async function handleGetDesignSuggestions(imageDataUri: string) {
  try {
    if (!imageDataUri || !imageDataUri.startsWith('data:image/')) {
      return { success: false, error: 'Invalid image data URI provided.' };
    }
    const suggestions = await getDesignSuggestions({ imageDataUri });
    return { success: true, suggestions };
  } catch (error) {
    console.error('AI Suggestion Error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, error: `Failed to get design suggestions: ${errorMessage}` };
  }
}
