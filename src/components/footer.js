import React from 'react'
import LinkIcon from '@mui/icons-material/Link';
export const Footer = () => {
  return (
    <footer style={{position:"static"}}>
    <div className='foo-1'>
      <span>Docs
        <p>DOC's guideline</p>
      </span>
      <span>Community
        <p>community guideline</p>
      </span>
      <span><p>Link<a href='https://github.com/MallikarjunMooke'> git hub<LinkIcon style={{ color: '#000' }} className='link-git-hub' /></a></p></span>
    </div>
  </footer>
  )
}
