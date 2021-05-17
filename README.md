# online-displaying

A React App that allows user to make a third party request for the available text, converts thems to tokens(or words), calculates the frequency and diplays the words according to user input of the frequency

## URL's :
  
  1. Taking Input URL :
	<https://csb-nsvi1.netlify.app/>
	
  2. Showing Data URL :
	<https://csb-1mh0t.netlify.app/>

## Dependencies :
1.		bootstrap : "5.0.1"
2.		react : "^17.0.2"
3.		react-bootstrap : "^1.5.2"
4.		react-dom : "^17.0.2",
5.		react-scripts : "4.0.3"

## Components :

1.	Takinginputs.js : This component takes input from the user in the form of numbers only for further processing. Here regex expression is used to conflict any other input rather than numbers. When the user hits submit button the provided user input is used to make a table for that frequency of words. Reset button clears the previously entered inputs by the user.
		
2.	Fetchingdata.js : This component goes into the url provided, fetches the text. It is then matched with the regex expression where words or tokens are formed. Here these tokens are processed by counting the frequency of each token. The frequency calculated along with the words is stored as Object. 
		
3.	Tabling.js : Depending upon the user input, the value is compared with the value of the Object. If that equals then the table is thus formed with the key - value pairs of that Object. The table is made with simple html tags which are rendered by markups, formulated by using Javascript.

4.	App.js : Compiles the above components created and exports to index.js.

5.	index.js : Renders the final project with the main div is linked to id = "root" from index.html file in the public section. 	

## Test Cases :

1.	Users cannot input negative Number
2.	Users cannot input text
3.	Users cannot enter 0 
	![alt text](https://github.com/manishbajagai2/online-displaying/blob/main/Images/Lesser.png)
	
4.	Users cannot exceed maximum frequency in the sample input
	![alt text](https://github.com/manishbajagai2/online-displaying/blob/main/Images/Greater.png)
	
## Looks : 

![alt text](https://github.com/manishbajagai2/online-displaying/blob/main/main.png)

![alt text](https://github.com/manishbajagai2/online-displaying/blob/main/data.png)
	
