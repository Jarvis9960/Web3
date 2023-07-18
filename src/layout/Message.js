import { useEffect, useState } from "react";

const nameArrays = [
  "Aarav",
  "Aarya",
  "Abha",
  "Aditi",
  "Advait",
  "Aishwarya",
  "Akash",
  "Amrita",
  "Ananya",
  "Anika",
  "Anil",
  "Anisha",
  "Ankit",
  "Anupam",
  "Arjun",
  "Asha",
  "Ashok",
  "Avani",
  "Ayush",
  "Bhavesh",
  "Chaitanya",
  "Charu",
  "Chetan",
  "Daksha",
  "Darshan",
  "Deepak",
  "Devika",
  "Dhruv",
  "Divya",
  "Ekta",
  "Ganesh",
  "Gaurav",
  "Gayatri",
  "Harish",
  "Heena",
  "Himanshu",
  "Isha",
  "Jai",
  "Jaya",
  "Jayesh",
  "Juhi",
  "Kabir",
  "Kamala",
  "Karan",
  "Kavita",
  "Keshav",
  "Khushi",
  "Kirti",
  "Krishna",
  "Kumar",
  "Kusum",
  "Lakshmi",
  "Madhav",
  "Madhu",
  "Mahesh",
  "Manish",
  "Mansi",
  "Maya",
  "Mihir",
  "Mira",
  "Mohini",
  "Mohan",
  "Mohini",
  "Naina",
  "Nakul",
  "Neha",
  "Niharika",
  "Nikita",
  "Nishant",
  "Nisha",
  "Nitin",
  "Pallavi",
  "Pankaj",
  "Pooja",
  "Prakash",
  "Praveen",
  "Preeti",
  "Priya",
  "Rahul",
  "Raj",
  "Rajesh",
  "Rakesh",
  "Rama",
  "Ramakant",
  "Ranjit",
  "Ravi",
  "Ritu",
  "Rohit",
  "Rupali",
  "Sagar",
  "Sakshi",
  "Saloni",
  "Sameer",
  "Sanjay",
  "Santosh",
  "Sarika",
  "Seema",
  "Shalini",
  "Shashank",
  "Sheetal",
  "Shiv",
  "Shreya",
  "Sneha",
  "Sonam",
  "Sonal",
  "Sudhir",
  "Suman",
  "Sunita",
  "Suresh",
  "Swati",
  "Tanvi",
  "Tarun",
  "Trisha",
  "Uma",
  "Umesh",
  "Upasana",
  "Utkarsh",
  "Ved",
  "Vidya",
  "Vikram",
  "Vinay",
  "Vineet",
  "Vinita",
  "Vipul",
  "Vivek",
  "Yash",
  "Yashika",
  "Zoya",
  "Aahana",
  "Aakash",
  "Aanya",
  "Aarushi",
  "Abhinav",
  "Aditya",
  "Akshara",
  "Akshay",
  "Alia",
  "Alok",
  "Aman",
  "Ambika",
  "Amit",
  "Aparna",
  "Aryan",
  "Arpita",
  "Arnav",
  "Aruna",
  "Ayesha",
  "Chandan",
  "Chandra",
  "Chetna",
  "Chirag",
  "Dhara",
  "Dharmendra",
  "Dimple",
  "Divyansh",
  "Eesha",
  "Ekansh",
  "Falguni",
  "Falak",
  "Farhan",
  "Farida",
  "Firoz",
  "Gayathri",
  "Girish",
  "Gita",
  "Gopal",
  "Gopika",
  "Grishma",
  "Gunjan",
  "Harsh",
  "Hina",
  "Iksha",
  "Ishita",
  "Jatin",
  "Jyoti",
  "Kalyani",
  "Kanika",
  "Kirtan",
  "Komal",
  "Kunal",
  "Lalita",
  "Manan",
  "Mandar",
  "Meera",
  "Mihika",
  "Minal",
  "Mithun",
  "Mohit",
  "Mukul",
  "Namrata",
  "Nandini",
  "Navin",
  "Neelam",
  "Nihal",
  "Nihar",
  "Nila",
  "Nimit",
  "Nisha",
  "Ojas",
  "Om",
  "Pavitra",
  "Poonam",
  "Priyanka",
  "Rachna",
  "Radha",
  "Rajat",
  "Rajeev",
  "Rakhi",
  "Raman",
  "Ramona",
  "Rashmi",
  "Reena",
  "Rishabh",
  "Ritesh",
  "Rohini",
  "Saumya",
  "Shankar",
  "Shivani",
  "Siddharth",
  "Simran",
  "Suraj",
  "Tara",
  "Uday",
  "Ujwal",
  "Vaishnavi",
  "Vandana",
  "Varun",
  "Vibha",
  "Vidhi",
  "Vijay",
  "Vimal",
  "Vineeta",
  "Vrinda",
  "Yashvi",
  "Zara",
];

const randomToken = [5, 6, 7, 8, 9, 10, 11, 12];

const Message = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNameGenerator = Math.floor(Math.random() * 230);
      const randomTokenGenrator = Math.floor(Math.random() * 8);

      setName(nameArrays[randomNameGenerator]);
      setToken(randomToken[randomTokenGenrator]);
    }, 2500);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {name && (
        <div className="sticky-container">
          {name} Just Claim {token} Bajrangi token Just a min ago
        </div>
      )}
    </>
  );
};

export default Message;