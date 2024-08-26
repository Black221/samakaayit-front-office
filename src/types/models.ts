export type UserModel = {
  id: string;
  email: string;
  role: string;
};

export type RVModel = {
  name: string;
  time: string;
};

export type DemandeModel = {
  name: string;
  date: string;
  numDossier: string;
  status: string;
};

export type MessageModel = {
  imageURL: string;
  title: string;
  message: string;
};
