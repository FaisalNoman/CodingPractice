using System;

namespace OOPPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            Car toyota = new Car();
            toyota.make = "Toyota";
            toyota.variant = "Camry";
            toyota.model = "2021";
            toyota.maxSpeed = 220;
            toyota.color = "White";

            Car honda = new Car(){
                make = "Honda",
                model = "2020",
                maxSpeed = 230
            };

            toyota.Accelerate();
            toyota.Accelerate();
            toyota.Brake();
            toyota.Accelerate();
            
            honda.Accelerate();
            honda.Brake();
            honda.Brake();
            honda.Brake();

            Car suzuki = new Car("Suzuki",190);
            suzuki.Accelerate();
            suzuki.Brake();

            SportsCar gt = new SportsCar(){
                make = "GT100",
                maxSpeed = 400
            };

            gt.Accelerate();
            gt.Turbo();
            gt.Brake();

            
        }
    }
}
