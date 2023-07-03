# Broken App Issues
The problem with the broken app was, the app was trying to access the results variable, before all
the promises were fulfilled. 
To fix it I refactored the code to wait for all the promises to be fullfilled prior to 
accessing the variable and sending the results to the user.
