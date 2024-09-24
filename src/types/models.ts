export type UserModel = {
  id?: string;
  role?: string;
  email: string;
  _id: string;
  CNI: string;
  phoneNumber: string;
  name: string;
  surname: string;
  birthDate: string;
  address: string
  job: string;
  sex?: 'M' | 'F';
  imageURL?: string;
  idNumber: string;
  institution: Institution;
};

export type RendezVous = {
  _id: string;
  citoyen: Citoyen;
  institution: Institution;
  dateAndHour: string;
  duration: number;
  state: string;
  priority: string;
  type: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Demande = {
  _id: string;
  citoyen: Citoyen | undefined;
  service: Service | undefined;
  state: string;
  documentsByAgent: string[] | undefined;
  processedBy: string[] | undefined;
  institution: Institution | undefined;
  documentResponses: DocumentResponses| undefined;
  __v: number | undefined;
  dateAndHourTreatment: string | undefined;
  commentByAgent: string | undefined;
};

export type Citoyen = {
  _id: string | undefined;
  CNI: string | undefined;
  phoneNumber: string | undefined;
  name: string | undefined;
  surname: string | undefined;
  birthday: string | undefined;
  job: string | undefined;
  sex: string | undefined;
  password: string | undefined;
  fathersName: string | undefined;
  fathersSurname: string | undefined;
  mothersName: string | undefined;
  mothersSurname: string | undefined;
  maritalStatus: string | undefined;
  address: string | undefined;
  nationality: string | undefined;
  country: string | undefined;
  city: string | undefined;
  __v: number | undefined;
};

export type Service = {
  _id: string | undefined;
  name: string | undefined;
  category: string | undefined;
  documentName: string | undefined;
  fees: number | undefined;
  processingTime: string | undefined;
  description: string | undefined;
  link: string | undefined;
  institutions: Institution[]| undefined;
  fields: Field[] | undefined;
  __v: number | undefined;
};

export type Institution = {
  _id: string | undefined;
  name: string | undefined;
  department: string | undefined;
  domain: string | undefined;
  locality: string | undefined;
  services?: any[];
  __v: number | undefined;
};

export type Field = {
  label: string | undefined;
  fieldType: string | undefined;
  required: boolean | undefined;
};

export type DocumentResponses = {
  "Copie de la Carte d'Identité": string | undefined;
  // name: string | undefined;
  // id: string | undefined;
};

// export type DocumentResponses = Record <string, string>


export type MessageModel = {
  imageURL: string;
  title: string;
  message: string;
};
