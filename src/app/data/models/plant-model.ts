export interface Plant {
  id: string;
  name: string;
  pfennigNumber: number;
  nameGiver: string;
  discoverLocation: string;
  discoverDate: Date;
  secondaryName: string;
  secondaryNameGiver: string;
  imageUrl: string;
  description: string;
}

export interface FileData {
  id: string;
  fileName: string;
  publicUrl: string;
  fileType: number;
}

export interface PlantDetails extends Plant {
  filedata: FileData[];
}
