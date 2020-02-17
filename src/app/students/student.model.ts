export class Student {
    constructor(public StudentId?: number,
        public FirstName?: string, public LastName?: string,
        public MobileNo?: string, public EmailId?: string, public Address?: Address,
        public Hobbies?:string[],
        public NotificationType?:string
    ) {
    }
}

export class Address {
    constructor(public AddressId: number, public AddLine1: string,
        public AddLine2: string, public AddLine3: string,
        public City: string, public State: string) {
    }
}


export const students: Student[] = [
    {
      StudentId: 1, FirstName: "Ram", LastName: "Patil", MobileNo: "985896589658", EmailId: "ram@gmail.com",
      Address: { AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Maharashtra" }
    },
    {
      StudentId: 2, FirstName: "Ganesh", LastName: "Thorat", MobileNo: "985896589658", EmailId: "ganesh@gmail.com",
      Address: { AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Delhi" }
    },
    {
      StudentId: 3, FirstName: "Sadashiv", LastName: "Darade", MobileNo: "985896589658", EmailId: "sadashiv@gmail.com",
      Address: { AddressId: 1, AddLine1: "Test", AddLine2: "Test", AddLine3: "Test", City: "Test", State: "Gujrat" }
    }
  ];