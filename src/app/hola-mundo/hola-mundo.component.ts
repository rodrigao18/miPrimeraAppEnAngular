import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  titulo = 'Bienvenido a aungular'

  name:string='RODRIGO';
  age:number;
  address : {
    street:string,
    city:string
  };
  hobbies:string[];


  constructor() {

    this.age=28;
    this.address = {
      street:'azucena 376',
      city:'Quillora'
    }
    this.hobbies = ['Ruta' , 'Play game' , 'Watch Video']
   }
   //declarando
   usuarios : string[] = ['rodrigo' ,'juan','jorgue']

   nombre : string ='Rodrigo Figueroa';
   edad : string = '28';


   addUsers(newUser :any){
     this.usuarios.push(newUser.value);    
    newUser.value=''
    newUser.focus();
    return false;
   }

   deleteUser(usuario:any){

    for(let i=0; i < this.usuarios.length; i++ ){
      if(usuario == this.usuarios[i]){
        this.usuarios.splice(i,1);

      }
    }
   
   }

  ngOnInit(): void {
  }

}
