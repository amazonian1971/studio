
"use server"

import { mockUsers, mockGroups, mockPromises } from "@/lib/placeholder-data";
import type { UserSuggestion, User } from "@/lib/types";

// This is a simplified, mock version of the recommendation engine.
// In a real application, this would be replaced with actual Firestore queries
// and a more sophisticated algorithm.
// We're also assuming the "current user" is the first user in our mock data.
const CURRENT_USER_ID = 'user-1';

export async function getSuggestions(): Promise<UserSuggestion[]> {
  const currentUser = mockUsers.find(u => u.id === CURRENT_USER_ID);
  if (!currentUser) return [];

  const suggestions = new Map<string, UserSuggestion>();

  // Helper to add a suggestion
  const addSuggestion = (user: User, reason: string) => {
    // Don't suggest the current user or existing friends (not implemented yet)
    if (user.id === CURRENT_USER_ID) return;
    if (!suggestions.has(user.id)) {
      suggestions.set(user.id, { user, reason });
    }
  };

  // 1. Suggest users from shared groups
  const userGroups = mockGroups.filter(g => g.members.some(m => m.id === CURRENT_USER_ID));
  for (const group of userGroups) {
    for (const member of group.members) {
      addSuggestion(member, `You are both in the '${group.name}' group.`);
    }
  }

  // 2. Suggest users who made promises with similar tags
  const currentUserPromises = mockPromises.filter(p => p.author.id === CURRENT_USER_ID);
  const currentUserTags = new Set(currentUserPromises.flatMap(p => p.tags));
  
  if (currentUserTags.size > 0) {
    for (const promise of mockPromises) {
      const hasMutualTag = promise.tags.some(tag => currentUserTags.has(tag));
      if (hasMutualTag) {
        addSuggestion(promise.author, `You both have an interest in similar topics.`);
      }
    }
  }
  
  // Convert map to array and simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return Array.from(suggestions.values());
}
