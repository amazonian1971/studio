// The AI code was generated, but please review it carefully to ensure it meets the requirements.

'use server';

/**
 * @fileOverview Smart tag suggestion AI agent.
 *
 * - getSmartTagSuggestions - A function that suggests relevant tags for a promise based on its title and description.
 * - SmartTagSuggestionsInput - The input type for the getSmartTagSuggestions function.
 * - SmartTagSuggestionsOutput - The return type for the getSmartTagSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartTagSuggestionsInputSchema = z.object({
  title: z.string().describe('The title of the promise.'),
  description: z.string().describe('The description of the promise.'),
  suggestedTags: z.array(z.string()).describe('A list of auto-suggested tags.'),
});
export type SmartTagSuggestionsInput = z.infer<typeof SmartTagSuggestionsInputSchema>;

const SmartTagSuggestionsOutputSchema = z.object({
  relevantTags: z
    .array(z.string())
    .describe('A list of tags deemed relevant to the promise.'),
});
export type SmartTagSuggestionsOutput = z.infer<typeof SmartTagSuggestionsOutputSchema>;

export async function getSmartTagSuggestions(
  input: SmartTagSuggestionsInput
): Promise<SmartTagSuggestionsOutput> {
  return smartTagSuggestionsFlow(input);
}

const smartTagSuggestionsPrompt = ai.definePrompt({
  name: 'smartTagSuggestionsPrompt',
  input: {schema: SmartTagSuggestionsInputSchema},
  output: {schema: SmartTagSuggestionsOutputSchema},
  prompt: `You are an AI assistant helping users tag their promises.

  Based on the title and description of the promise, and a list of auto-suggested tags, determine which tags are most relevant to the promise.
  Return only the tags that are highly relevant.

  Title: {{{title}}}
  Description: {{{description}}}
  Suggested Tags: {{#each suggestedTags}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  `,
});

const smartTagSuggestionsFlow = ai.defineFlow(
  {
    name: 'smartTagSuggestionsFlow',
    inputSchema: SmartTagSuggestionsInputSchema,
    outputSchema: SmartTagSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await smartTagSuggestionsPrompt(input);
    return output!;
  }
);
