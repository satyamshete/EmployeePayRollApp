class EmployeePayRollData 
{
    get id() {return this._id;}
    set id(id) 
    {
        this._id = id;
    }
    get name() { return this._name}
    set name (name) 
    {
        let nameRegex = RegExp("^[A-Z]{1}[a-z A-Z]{2,}$");
        if(nameRegex.test(name)){
            this._name=name;
        }
        else 
        throw "Invalid Name"
    }
    get startDate() {
        return this._startDate;
      }
      set startDate(date) {
        this._startDate = date;
      }
    
      get note() {
        return this._note;
      }
      set note(note) {
        this._note = note;
      }
    
      get salary() {
        return this._salary;
      }
      set salary(salary) {
        this._salary = salary;
      }
    
      get department() {
        return this._department;
      }
      set department(department) {
        this._department = department;
      }
    
      get gender() {
        return this._gender;
      }
      set gender(gender) {
        this._gender = gender;
      }
    
      get profile() {
        return this._profile;
      }
    
      set profile(profile) {
        this._profile = profile;
      }
      toString() {    
        return (
          "id= " +
          this.id +
          " name= " +
          this.name +
          " gender= " +
          this.gender +
          " profilePicture= " +
          this.profile +
          " department= " +
          this.department +
          " salary= " +
          this.salary +
          " startDate= " +
          this.startDate +
          " employee note= " +
          this.note
        );
      }
}