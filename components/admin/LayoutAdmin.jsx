import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';
import FooterAdmin from './FooterAdmin';

export default function LayoutAdmin(props) {


  const key = 'test'

 
  const [addKey, setAddKey] = useState(false);

  useEffect(() => {
 
    if (key !== process.env.ADMINKEY) {
      setAddKey(true);
    } else {
      setAddKey(false);
    }
  }, []);

  return (
    <div>
      <NavAdmin />
 
      {addKey ? (
        <div>{props.children}</div>
      ) : (
        <div>Else content goes here</div>
      )}
      <footer>
        <FooterAdmin />
      </footer>
    </div>
  );
}
