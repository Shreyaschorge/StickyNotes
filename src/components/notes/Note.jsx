import React from 'react';

const Note = () => {
  return (
    <div style={{ padding: '75px 35px 30px 0px' }}>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'> Card Title</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            voluptas nemo dolor veritatis ipsam. Unde, perspiciatis vel?
            Obcaecati fuga minus laboriosam. Fuga labore, animi hic deleniti
            aliquid minima exercitationem porro quidem consectetur eius
            accusamus veritatis temporibus a quis culpa ipsam laboriosam,
            suscipit, officiis ipsa nulla sunt! Mollitia atque laboriosam veniam
            fugiat quas! Minima deleniti perspicia accusantium odio, voluptate
            corporis sapiente quae optio dolorem dicta aut corrupti quibusdam
            nostrum laborum facilis tenetur aliquid et dolores rem facere.
            Reprehenderit officiis assumenda odit accusantium repellat, libero
            aliquid maxime adipisci provident. Ad, placeat suscipit voluptatum
            vel numquam, quia nihil cum provident cumque magnam dolores
            laboriosam vitae eligendi ex tempore! Laborum, eos odio! Quod nam, a
            autem blanditiis nulla dolore dicta laborum eius sed provident
          </p>
        </div>
        <a
          href='#edit-note-modal'
          className='btn-floating halfway-fab waves-effect waves-light teal accent-4 modal-trigger'
          style={{ margin: '0px 50px 0px 0px' }}
        >
          <i className='material-icons'>create</i>
        </a>
        <a
          href='#!'
          className='btn-floating halfway-fab waves-effect waves-light red'
        >
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </div>
  );
};

export default Note;
