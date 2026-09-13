/**
 * ANALYTICS TYPES
 * Defines the schema for tracking user behavior, preferences, and session data.
 * This structure is designed to be "ML-Ready," capturing context, duration, and outcomes.
 */

export type InteractionEvent = {
  elementId: string;
  eventType: 'click' | 'hover' | 'scroll' | 'input';
  timestamp: number;
  metadata?: Record<string, any>;
};

export type QuizResponse = {
  questionId: string;
  selectedOptionId: string;
  timeSpentMs: number;
  changedMind: boolean;
};

export type UserSession = {
  sessionId: string;
  mode: 'tourist' | 'expat' | null;
  startTime: number;
  quizResponses: QuizResponse[];
  interactions: InteractionEvent[];
  finalCityChoice?: string;
};
