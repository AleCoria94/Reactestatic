import React from 'react';
import ItemCount from './ItemCount';

function Itemlistcontainer({titulo}){
return <>
<h1>{titulo}</h1>
<ItemCount stock='5' initial='1'/>

</> }
export default Itemlistcontainer;