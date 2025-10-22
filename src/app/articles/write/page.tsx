"use client";
import { useState } from "react";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Send, 
  Image as ImageIcon,
  Link as LinkIcon,
  Bold,
  Italic,
  List,
  Quote,
  Code,
  PenTool,
  Tag,
  Calendar,
  Clock,
  User,
  BookOpen,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WriteArticlePage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [isDraft, setIsDraft] = useState(true);
  const [isPublishing, setIsPublishing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  // Author information
  const [authorName, setAuthorName] = useState("");
  const [authorPosition, setAuthorPosition] = useState("");
  const [authorBio, setAuthorBio] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  
  // Image upload states
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isUploadingAuthorImage, setIsUploadingAuthorImage] = useState(false);

  const categories = [
    { id: "impact-stories", name: "Impact Stories", icon: "❤️" },
    { id: "stem-innovations", name: "STEM Innovations", icon: "💡" },
    { id: "career-empowerment", name: "Career & Empowerment", icon: "📈" },
    { id: "education-learning", name: "Education & Learning", icon: "🎓" },
    { id: "community-collaboration", name: "Community & Collaboration", icon: "👥" },
    { id: "research-insights", name: "Research & Insights", icon: "📊" },
    { id: "voices-perspectives", name: "Voices & Perspectives", icon: "💭" },
    { id: "events-opportunities", name: "Events & Opportunities", icon: "📅" },
    { id: "womens-history", name: "Women's History", icon: "⭐" }
  ];

  const handleSaveDraft = () => {
    // In a real app, this would save to a database
    console.log("Saving draft...", { title, excerpt, content, category, tags });
    setIsDraft(true);
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    // In a real app, this would publish the article
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsPublishing(false);
    setIsDraft(false);
    // Redirect to the published article
  };

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    
    // Simulate image upload (in a real app, this would upload to a service like Cloudinary)
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImages(prev => [...prev, result]);
        setIsUploadingImage(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploadingImage(false);
    }
  };

  const insertImageIntoContent = (imageUrl: string) => {
    const imageMarkdown = `![Image](${imageUrl})`;
    setContent(prev => prev + '\n\n' + imageMarkdown + '\n\n');
  };

  const handleAuthorImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploadingAuthorImage(true);
    
    // Simulate author image upload (in a real app, this would upload to a service like Cloudinary)
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setAuthorImage(result);
        setIsUploadingAuthorImage(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading author image:', error);
      setIsUploadingAuthorImage(false);
    }
  };

  const formatContent = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-white/10 px-2 py-1 rounded">$1</code>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^/, '<p>')
      .replace(/$/, '</p>');
  };

  return (
    <main className="min-h-screen bg-[#0a0f1f] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[rgba(6,10,22,0.6)] backdrop-blur-md border-b border-white/10">
        <div className="container-page h-16 flex items-center justify-between">
          <Link href="/articles" className="flex items-center gap-2 text-white">
            <img src="/logo.svg" alt="Her Impact Logo" className="w-6 h-6" />
            <span className="subheading">Her Impact</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/articles" className="flex items-center gap-2 text-white/80 hover:text-white">
              <ArrowLeft size={16} />
              Back to Articles
            </Link>
            <button
              onClick={handlePreview}
              className="btn btn-outline flex items-center gap-2"
            >
              <Eye size={16} />
              {showPreview ? 'Edit' : 'Preview'}
            </button>
          </div>
        </div>
      </header>

      <div className="container-page py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main Editor */}
            <div className="lg:col-span-2">
              <div className="card-glow p-8 h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                    <PenTool size={20} className="text-white" />
                  </div>
                  <h1 className="section-title text-2xl">Write New Article</h1>
                </div>

                {!showPreview ? (
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Article Title *
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter a compelling title for your article..."
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                      />
                    </div>

                    {/* Excerpt */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Article Excerpt *
                      </label>
                      <textarea
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        placeholder="Write a brief summary of your article..."
                        rows={3}
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 resize-none"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Article Content *
                      </label>
                      <div className="border border-white/10 rounded-lg overflow-hidden">
                        {/* Toolbar */}
                        <div className="flex items-center gap-2 p-3 bg-white/5 border-b border-white/10">
                          <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Bold">
                            <Bold size={16} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Italic">
                            <Italic size={16} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded transition-colors" title="List">
                            <List size={16} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Quote">
                            <Quote size={16} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Code">
                            <Code size={16} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Link">
                            <LinkIcon size={16} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Image">
                            <ImageIcon size={16} />
                          </button>
                        </div>
                        <textarea
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="Write your article content here... You can use **bold**, *italic*, `code`, and other formatting."
                          rows={15}
                          className="w-full p-4 bg-transparent text-white placeholder:text-white/60 focus:outline-none resize-none"
                        />
                      </div>
                      <p className="text-xs text-white/60 mt-2">
                        Use **bold**, *italic*, `code`, and other markdown formatting
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Preview */
                  <div className="space-y-6">
                    <div className="border-b border-white/10 pb-6">
                      <h1 className="section-title text-3xl mb-4">{title || "Untitled Article"}</h1>
                      <p className="text-lg text-white/70 mb-4">{excerpt || "No excerpt provided"}</p>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <User size={16} />
                          {authorName || "Your Name"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {new Date().toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {Math.ceil(content.split(' ').length / 200)} min read
                        </span>
                      </div>
                      
                      {/* Author Info */}
                      {(authorName || authorPosition || authorBio) && (
                        <div className="mt-6 p-4 bg-white/5 rounded-lg">
                          <div className="flex items-start gap-4">
                            {authorImage && (
                              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                <Image 
                                  src={authorImage} 
                                  alt={authorName || "Author"} 
                                  width={64} 
                                  height={64} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1">
                              {authorName && (
                                <h4 className="font-semibold text-white mb-1">{authorName}</h4>
                              )}
                              {authorPosition && (
                                <p className="text-sm text-[#79a1ff] mb-2">{authorPosition}</p>
                              )}
                              {authorBio && (
                                <p className="text-sm text-white/70">{authorBio}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div 
                      className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white/90 prose-strong:text-white"
                      dangerouslySetInnerHTML={{ __html: formatContent(content) }}
                    />
                  </div>
                )}
              </div>

              {/* Actions and Tips Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Actions */}
                <div className="card-glow p-6">
                  <h3 className="subheading text-lg mb-4">Actions</h3>
                  <div className="space-y-3">
                    <button
                      onClick={handleSaveDraft}
                      className="w-full btn btn-outline flex items-center gap-2"
                    >
                      <Save size={16} />
                      Save as Draft
                    </button>
                    
                    <button
                      onClick={handlePublish}
                      disabled={!title || !excerpt || !content || !category || isPublishing}
                      className="w-full btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isPublishing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0b3d91] border-t-transparent rounded-full animate-spin" />
                          Publishing...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Publish Article
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Writing Tips */}
                <div className="card-glow p-6">
                  <h3 className="subheading text-lg mb-4">Writing Tips</h3>
                  <div className="space-y-3 text-sm text-white/70">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#79a1ff] mt-2 flex-shrink-0" />
                      <p>Write a compelling title that captures attention</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#79a1ff] mt-2 flex-shrink-0" />
                      <p>Use a clear, engaging excerpt to hook readers</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#79a1ff] mt-2 flex-shrink-0" />
                      <p>Include relevant tags to improve discoverability</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#79a1ff] mt-2 flex-shrink-0" />
                      <p>Use formatting to make your content scannable</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#79a1ff] mt-2 flex-shrink-0" />
                      <p>Share your unique perspective and experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 h-fit">
              {/* Author Information */}
              <div className="card-glow p-6">
                <h3 className="subheading text-lg mb-4">Author Information</h3>
                
                {/* Author Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Author Name *
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Enter your full name..."
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                  />
                </div>

                {/* Author Position */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Position/Title
                  </label>
                  <input
                    type="text"
                    value={authorPosition}
                    onChange={(e) => setAuthorPosition(e.target.value)}
                    placeholder="e.g., Software Engineer, Researcher, CEO..."
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                  />
                </div>

                {/* Author Bio */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Bio/Description
                  </label>
                  <textarea
                    value={authorBio}
                    onChange={(e) => setAuthorBio(e.target.value)}
                    placeholder="Write a brief bio about yourself..."
                    rows={3}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 resize-none"
                  />
                </div>

                {/* Author Image */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Author Image
                  </label>
                  
                  {/* Image URL Input */}
                  <div className="mb-3">
                    <label className="block text-xs text-white/60 mb-1">
                      Or enter image URL:
                    </label>
                    <input
                      type="url"
                      value={authorImage}
                      onChange={(e) => setAuthorImage(e.target.value)}
                      placeholder="https://example.com/your-photo.jpg"
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-xs text-white/60 mb-1">
                      Or upload from computer:
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAuthorImageUpload}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#79a1ff] file:text-white hover:file:bg-[#79a1ff]/80"
                      disabled={isUploadingAuthorImage}
                    />
                    {isUploadingAuthorImage && (
                      <p className="text-sm text-white/60 mt-2">Uploading author image...</p>
                    )}
                  </div>

                  {/* Author Image Preview */}
                  {authorImage && (
                    <div className="mt-3">
                      <label className="block text-xs text-white/60 mb-1">
                        Preview:
                      </label>
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                        <Image 
                          src={authorImage} 
                          alt="Author preview" 
                          width={80} 
                          height={80} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Article Settings */}
              <div className="card-glow p-6">
                <h3 className="subheading text-lg mb-4">Article Settings</h3>
                
                {/* Category */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                  >
                    <option value="" className="bg-[#0a0f1f]">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id} className="bg-[#0a0f1f]">
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Enter tags separated by commas..."
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                  />
                  <p className="text-xs text-white/60 mt-1">
                    Example: AI, Healthcare, Innovation, Women in STEM
                  </p>
                </div>

                {/* Featured Image */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="card-glow p-6">
                <h3 className="subheading text-lg mb-4">Upload Images</h3>
                
                {/* Image Upload Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Upload Images
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#79a1ff] file:text-white hover:file:bg-[#79a1ff]/80"
                    disabled={isUploadingImage}
                  />
                  {isUploadingImage && (
                    <p className="text-sm text-white/60 mt-2">Uploading image...</p>
                  )}
                </div>

                {/* Uploaded Images */}
                {uploadedImages.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-white/80">Uploaded Images:</h4>
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image 
                            src={image} 
                            alt={`Uploaded image ${index + 1}`} 
                            width={48} 
                            height={48} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-white/80">Image {index + 1}</p>
                        </div>
                        <button
                          onClick={() => insertImageIntoContent(image)}
                          className="px-3 py-1 bg-[#79a1ff] text-white text-xs rounded hover:bg-[#79a1ff]/80 transition-colors"
                        >
                          Insert
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Status */}
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5">
                  {isDraft ? (
                    <>
                      <AlertCircle size={16} className="text-yellow-400" />
                      <span className="text-sm text-yellow-400">Draft</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle size={16} className="text-green-400" />
                      <span className="text-sm text-green-400">Published</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
