//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

test_arr=["ali","atif","aqib"]
console.log(test_arr)
try {
    console.log(test_arr[3])
  }
  catch(err) {
    console.log(err.message())
  }
  finally {
    console.log(test_arr)
  }
