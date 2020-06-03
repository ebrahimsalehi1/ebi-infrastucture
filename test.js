class Person{

    constructor(namFist,namLast,datBirth,codNat,codPassport,codEconom,codMeli){
        console.log('construnctor');     
        //this.personId = name ;
        this.namFist = namFist;
        this.namLast = namLast;    
        this.datBirth = datBirth;
        this.codNat = codNat;
        this.codPassport = codPassport;
        this.codEconom = codEconom;
        this.codMeli = codMeli;
    }

    login(){
        console.log('login',this.name,this.email,this.status);       
        return this; 
    }

    logout(){
        console.log('logout');   
        return this;      
    }

    updateData(){
        this.score ++;
        return this; 
    }
}

class User extends Person{
    constructor()
}

const p = new Person('ebrahim','ebi@yahoo.com','OK');

// p.name = 'ebrahim';
// p.email='ebi@yahoo.com'
// p.status='OK';

p.login().updateData().logout();
// p.logout();
