function drEvil(amount)
{
  if(amount === 1000000)
  {
    return (amount + "$(pinky)");
  }
  else if(amount > 1000000)
  {
    return  (amount + "$ (pinky)");
  }
  else
    {
        return (amount + "$");
    }
};

function mixUp(x, y)
{
  return y.slice(0,2) + x.slice(2) + "  " + x.slice(0, 2) + y.slice(2);
};
mixUp('ra', 'ni');

function fixStart(a)
{
  var b = a.charAt(0); // method charAt(0) first char of given string
  return b + a.slice(1).replace(new RegExp(b, 'g'), '*');
};
fixStart('star');
