import React, { useState, useEffect } from 'react';
import styles from './Blog.module.css';

export default function Blog() {
  const [adminKey] = useState('test123');
  const [blogs, setBlogs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [inputKey, setInputKey] = useState('');

  useEffect(() => {
    try {
      const storedBlogs = localStorage.getItem('blogs');
      if (storedBlogs) {
        const parsedBlogs = JSON.parse(storedBlogs);
        if (Array.isArray(parsedBlogs)) {
          setBlogs(parsedBlogs);
        } else {
          console.error('Invalid blogs format in localStorage. Resetting to default.');
          localStorage.removeItem('blogs');
          setDefaultBlogs();
        }
      } else {
        setDefaultBlogs();
      }
    } catch (error) {
      console.error('Error parsing blogs from localStorage:', error);
      localStorage.removeItem('blogs');
      setDefaultBlogs();
    }
  }, []);

  const setDefaultBlogs = () => {
    const defaultBlogs = [
      {
        id: 1,
        title: 'From Dough to Delight: The Secret to Perfect Homemade Pizza',
        content: `There's something magical about creating your own pizza from scratch. It starts with the dough—a crucial element that needs time to rise until it becomes soft and pillowy. Once ready, you roll it out and let your imagination run wild with toppings. Are you a fan of classic Margherita, loaded pepperoni, or maybe a veggie-packed masterpiece? The beauty of homemade pizza is the freedom to choose. Bake it in a preheated oven at 250°C (480°F) to achieve that perfect balance of a crispy crust and bubbling, gooey cheese. The aroma that fills your kitchen will transport you straight to an Italian pizzeria. Trust me, the effort pays off in every delicious bite!`,
        img: 'https://www.allrecipes.com/thmb/9UTj7kZBJDqory0cdEv_bw6Ef_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-2x1-BG-2976-d5926c9253d3486bbb8a985172604291.jpg',
      },
      {
        id: 2,
        title: 'Exploring the Flavors of Asia, One Street at a Time',
        content: `Asian street food offers a vibrant and sensory-filled adventure that’s unmatched. Picture walking through the bustling night markets of Taipei or the aromatic streets of Bangkok. The sizzle of woks, the colorful array of ingredients, and the skillful hands of street chefs create a symphony of flavors. From crispy spring rolls in Vietnam to the comforting heat of a spicy bowl of laksa in Malaysia, every dish tells a story of culture and tradition. These meals are not just food; they are experiences—affordable, made fresh before your eyes, and bursting with authentic taste. Next time you travel, skip the fancy restaurants and dive into the heart of local street food. It’s a culinary journey you’ll never forget.`,
        img: 'https://i.insider.com/629a6b217bc6a80018b64bb8?width=700',
      },   
      {
        id: 3,
        title: 'Rich, Moist, and Decadent: Chocolate Cake Perfection',
        content: `Who doesn’t love a slice of chocolate cake? This recipe is a game-changer. Start with high-quality cocoa powder and melted dark chocolate for an intense flavor. Add buttermilk to make it incredibly moist, and don’t skimp on the buttercream frosting—it’s the star of the show! Perfect for birthdays, celebrations, or just because you’re craving something sweet, this cake is a guaranteed crowd-pleaser. Pro tip: serve with a scoop of vanilla ice cream for the ultimate indulgence.`,
        img: 'https://www.bakedambrosia.com/wp-content/uploads/2023/10/Moist-Chocolate-Cake-20.jpg',
      },
    ];

    setBlogs(defaultBlogs);
    localStorage.setItem('blogs', JSON.stringify(defaultBlogs));
  };

  const checkAdmin = () => {
    if (inputKey.trim() === adminKey) {
      setIsAdmin(true);
      setInputKey('');
    } else {
      alert('Invalid Admin Key!');
      setIsAdmin(false);
    }
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      title,
      content,
      img: imgUrl,
    };

    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    setTitle('');
    setContent('');
    setImgUrl('');
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const resetStorage = () => {
    localStorage.clear();
    alert("Storage has been reset!");
    window.location.reload();
  };

  return (
    <div className={styles.blogs}>
      <h2>Blogs</h2>
      <div className={styles.blogItems}>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className={styles.blog}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              {blog.img && <img src={blog.img} alt="blog" />}
              {isAdmin && (
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteBlog(blog.id)}
                >
                  Delete
                </button>
              )}
            </div>
          ))
        ) : (
          <div>No blogs available. Add one using the admin panel!</div>
        )}
      </div>
      {!isAdmin ? (
        <div className={styles.adminLogin}>
          <h3>Admin Login</h3>
          <div className={styles.loginDiv}>
            <input
              type="password"
              placeholder="Enter Admin Key"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
            />
            <button onClick={checkAdmin} className={styles.loginButton}>
              Login
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.addBlogForm}>
          <h3>Add a New Blog</h3>
          <form onSubmit={handleAddBlog}>
            <input
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              required
            />
            <textarea
              placeholder="Blog Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.textarea}
              required
            />
            <input
              onChange={(e) => setImgUrl(e.target.value)}
              value={imgUrl}
              className={styles.input}
              placeholder="Image URL"
              type="text"
              required
            />
            <div className={styles.btns}>
            <button type='submit' className={styles.addButton}>Add Blog</button>
            <button className={styles.addButton} onClick={resetStorage}>Reset Storage</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}