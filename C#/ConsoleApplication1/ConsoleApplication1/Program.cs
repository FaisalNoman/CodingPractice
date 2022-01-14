using System;

class Program
{
    static void Main(string[] args)
    {
        string result;
        Console.WriteLine("Hello World!");
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine(i);
        }
        result = Console.ReadLine();
        if (result == "0")
        {
            Console.WriteLine("Error");
        }
        else
            Console.WriteLine("Ok");

        Car toyota = new Car();
        toyota.make = "Toyota";
        toyota.model = "2021";
        toyota.speed = 0;
        toyota.Accelerate();
        toyota.CurrentSpeed();
        toyota.Brake();
        toyota.CurrentSpeed();
        Console.ReadLine();
    }
}

public class Car {

    public string model;
    public string make;
    public int speed = 0;

    public void Accelerate()
    {
        Console.WriteLine(speed);
        speed++;
    }

    public void Brake()
    {
        Console.WriteLine(speed);
        speed--;
    }

    public int CurrentSpeed()
    {
        Console.WriteLine("Current Speed is " + speed);
        return speed;
    }
}

