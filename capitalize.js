const capitalize = string => {
  if (string === '')
    throw new Error("It can't Capitalize an empty srting");
  
  if (!(/^[A-Z]+$/i).test(string.charAt(0)))  
    throw new Error("First character is expected to be alphabet");
  
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;