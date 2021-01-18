function IsTouching(a,b)
{
  if(Math.abs(a.x-b.x)<=b.width/2+a.width/2 && Math.abs(a.y-b.y)<=b.height/2+a.height/2  )
  {
    return true;
  }
    else
    {
    return false;
    }
}