export class NuevoUsuario{
  nombre: string;
  nombreUsuario: string;
  email: string
  password: string;


  constructor(nombre: string, nuevoUsuario:string, email:string, password:string){
    this.nombre=nombre
    this.nombreUsuario=nuevoUsuario
    this.email=email
    this.password=password
  }
}
