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
  _id: string;
  citoyen: Citoyen;
  service: Service;
  state: string;
  documentsByAgent: string[];
  processedBy: string[];
  institution: Institution;
  documentResponses: DocumentResponses;
  __v: number;
  dateAndHourTreatment: string;
  commentByAgent: string;
};

export type Citoyen = {
  _id: string;
  CNI: string;
  phoneNumber: string;
  name: string;
  surname: string;
  birthday: string;
  job: string;
  sex: string;
  password: string;
  fathersName: string;
  fathersSurname: string;
  mothersName: string;
  mothersSurname: string;
  maritalStatus: string;
  address: string;
  __v: number;
};

export type Service = {
  _id: string;
  name: string;
  category: string;
  documentName: string;
  fees: number;
  processingTime: string;
  description: string;
  link: string;
  institutions: Institution[];
  fields: Field[];
  __v: number;
};

export type Institution = {
  _id: string;
  name: string;
  department: string;
  domain: string;
  locality: string;
  services?: any[];
  __v: number;
};

export type Field = {
  label: string;
  fieldType: string;
  required: boolean;
};

export type DocumentResponses = {
  "Copie de la Carte d'Identité": string;
};

export type MessageModel = {
  imageURL: string;
  title: string;
  message: string;
};
