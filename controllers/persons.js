
const Person = require('../models/person');

exports.addPerson = (req,res,next) => {
    console.log('addPerson is execute',req.body);
    
    const person = new Person(req.body.title);
    person.save();
    res.redirect('/');
}

exports.addPerson2 = (req,res,next) => {
    const persons = Person.fetchAll();
    
    res.render('add-person',{
        pageTitle:'add person',
        path: '/admin/add-person',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}
