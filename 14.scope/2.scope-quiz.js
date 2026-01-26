{
    const x = 1;
    {
        const y = 2
        console.log(x)  // 1
    }
    console.log(x) //1
    //console.log(y) // fail
}


// 가장 가까운 변수를 최우선 순위로 한다.
const text = 'Global';
{
    const text = 'inside block';
    {
        console.log(text); // inside block
    }
}
console.log(text); // 블럭이 끝났기 때문에 다시 블럭 밖에 있는 변수를 참조한다. Global