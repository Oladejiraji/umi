export interface AuthRequest {
  email: string;
  password: string;
}

export interface FilePlusPreview extends File {
  preview: string;
}
