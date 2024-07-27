// activity 1 For loop

// task 1 
for(let i =1 ; i <=10 ; i++)
    {
      console.log(i)
    }
  
  // task 2
  for(let i =1 ; i <=10 ; i++)
    {
      console.log(5*i)
    }
  
  // activity 2 While loop
  
  // task 3
  
  let sum = 0
  let i = 1
  while(i<=10)
    {
      sum = sum +i ;
      i=i+1;
    }
   console.log(sum)
  
  
  // task 4
  let n = 10 
  while(n>=1)
    {
      console.log(n)
      n--;
    }
  
  
  // activity 3 do while loop
  
  // task 5
  let p= 1;
  do{
    console.log(p)
    p++;
  }
    while(p<=5)
  
  
  // task 6
  let num = 5
  let prod = 1 ;
  do{
    prod = prod * num ;
    num--;
  }
    while(num>=1)
  console.log(prod)
  
  // activity 4 Nested loop
  
  // task 7
  for(let i = 1 ; i<=5 ; i++)
    {
      let star = " "
      for(j = 1 ; j<=i ; j++)
          {
        star = star + "* "
          }
      console.log(star)
    }
  
  
  // activity 5 Nested loop
  
  // task 8
  for(let i = 1 ; i<=10 ; i++)
    {
      if(i==5)
        continue;
      console.log(i)
    }
  
  // task 9
  for(let i = 1 ; i<=10 ; i++)
    {
      if(i==7)
        break;
      console.log(i)
    }
    