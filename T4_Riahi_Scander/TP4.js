const fs = require('fs')

class File{
    constructor(thefile){
        this.file = thefile
        
    }
    read(){
        this.output = fs.readFileSync(this.file,{encoding:'utf-8',flag:'r'})
        
        //this.print()
    }
    write(Content){
        this.output = fs.writeFileSync(this.file,this.outputt+ '\n' + Content,{flag:'a+'})

    }
    delete(){
        fs.rmSync(this.file)
        
    } 
    print(){
        if(this.output != undefined)
            console.log(`Content of the file :  ${this.output}`)}
}

class Fille extends File {
    constructor(jsonfile){
        super(jsonfile,null)

    }




}







let monFichier  = new File('Monfichier.txt')
monFichier.read()
monFichier.print()
monFichier.write(" c vraie")
monFichier.read()
monFichier.print()
