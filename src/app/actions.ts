"use server"

import { getSmartTagSuggestions } from "@/ai/flows/smart-tag-suggestions"
import { categories } from "@/lib/categories";
import { z } from "zod"

const promiseSchema = z.object({
  title: z.string().min(1, "Title is required."),
  description: z.string().min(1, "Description is required."),
  deadline: z.coerce.date(),
  category: z.string().min(1, "Category is required."),
  tags: z.string(),
})

export async function createPromiseAction(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries())
  const result = promiseSchema.safeParse(rawFormData)

  if (!result.success) {
    console.error(result.error.flatten().fieldErrors)
    // In a real app, you'd return these errors to the form
    return { success: false, error: "Invalid data" }
  }

  // In a real app, you would save this data to a database
  console.log("New Promise to be created:", {
    ...result.data,
    tags: result.data.tags.split(",").map((t) => t.trim()),
  })

  // Simulate a delay
  await new Promise((res) => setTimeout(res, 1000))

  return { success: true }
}

export async function suggestTagsAction(title: string, description: string) {
  if (!title || !description) {
    return { relevantTags: [] };
  }
  
  // A predefined list of possible tags to help guide the AI
  const autoSuggestedTags = Object.values(categories).flat();

  try {
    const result = await getSmartTagSuggestions({
      title,
      description,
      suggestedTags: autoSuggestedTags
    });
    return result;
  } catch (error) {
    console.error("Error getting smart tag suggestions:", error);
    return { relevantTags: [] };
  }
}
