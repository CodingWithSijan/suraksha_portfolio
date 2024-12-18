import mental_health from "../assets/mental_health.jpg";
import patient_care from "../assets/patient_care.jpg";
import nurse_image from "../assets/nurse_image.jpg";

function Blog() {
  const blogPosts = [
    {
      title: "Mental Health in Nursing",
      image: mental_health,
    },
    {
      title: "Patient-Centered Care",
      image: patient_care,
    },
    {
      title: "Essential Skills for Nurses",
      image: nurse_image,
    },
  ];

  return (
    <div className="py-16 bg-gray-100" id="blog">
      <div className="grid md:grid-cols-3 gap-8 container mx-auto px-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:scale-105 transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600 mt-2">
                Insights into professional nursing care and skills.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
