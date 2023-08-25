//Problem 1 : Check whether a number is Prime or not

function checkPrime( num )
{
    if( num == 2 )
    {
        console.log( "Prime")  ;

        return  ;
    }

    if( num%2 == 0 )
    {
        console.log( "not Prime")  ;

        return  ;
    }
    
    for( let i = 3 ; i*i <= num ; i=i+2 )
    {
        if( num%i )
        {
            console.log( "not Prime")  ;

            return  ;
        }
    }

    console.log( "Prime")  ;
}

checkPrime( 23 )  ;

