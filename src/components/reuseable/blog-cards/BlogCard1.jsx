import Link from 'next/link';
import Image from 'next/image';
import NextLink from '../links/NextLink'; // ======================================================

// ======================================================
const BlogCard1 = ({
  date,
  image,
  title,
  category
}) => {
  return <article>
      <figure className="overlay overlay-1 hover-scale rounded mb-6">
       
          <a>
            <Image width={560} height={350} src={image} alt={title} style={{
            width: '100%',
            height: 'auto'
          }} />
            <span className="bg" />
          </a>
        

        <figcaption>
          <h5 className="from-top mb-0"></h5>
        </figcaption>
      </figure>

      <div className="post-header">
        <h2 className="post-title h3 mb-3">
          
        </h2>
      </div>

      <div className="post-footer">
        <ul className="post-meta">
          

          <li className="post-comments">
            
                  
                
          </li>
        </ul>
      </div>
    </article>;
};

export default BlogCard1;