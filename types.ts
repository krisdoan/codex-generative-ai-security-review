export interface ModelAttributes {
  gender: string;
  age: string;
  ethnicity: string;
  hairStyle: string;
  hairColor: string;
  clothing: string;
  environment: string;
  lighting: string;
  artStyle: string;
  colorGrading: string;
  aspectRatio: string;
  skinTexture: string;
  facialExpression: string;
  pose: string;
  shotType: string;
  handProps: string;
  imageSize: string;
}

export interface GenerationResult {
  imageUrl: string;
  promptJson: string;
  seedUsed: number;
  mimeType?: string;
  fileName?: string;
  error?: string;
  referenceFileName?: string;
}

export interface GenerationState {
  isLoading: boolean;
  results: GenerationResult[];
  error: string | null;
}

export enum Step {
  UPLOAD = 0,
  CONFIGURE = 1,
  RESULT = 2,
}
