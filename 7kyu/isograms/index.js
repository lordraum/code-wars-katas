/* 
TEST
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  }); */

string = "";

const isIsogram = (str) =>
  str
    .toLowerCase()
    .split("")
    .sort()
    .every((x, i, arr) => x !== arr[i + 1]);

console.log(isIsogram(string));

/* 
BEST SOLUTION
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
*/
