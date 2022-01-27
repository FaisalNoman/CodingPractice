using System;
public class Car {
    public string make;
    public string variant;
    public string model;
    public string registrationNo;
    public string color;
    public string bodyType;
    public int speed;
    public int maxSpeed;
    
    public Car(){
        Console.WriteLine("Car constructor called");
    }
    public Car(string make,int maxSpeed){
        this.make = make;
        this.maxSpeed = maxSpeed;
    }

    public void Accelerate(){
        if(speed < maxSpeed)
            speed++;
        Console.WriteLine(make + " current speed is : " + speed);
    }
    
    public void Brake(){
        if(speed > 0)
            speed--;
        Console.WriteLine(make + " current speed is : " + speed);
    }
}

public class SportsCar : Car{
    public void Turbo(){
        if(speed < maxSpeed)
            speed += 10;
        Console.WriteLine(make + " turbo called, current speed is : " + speed);
    }

}