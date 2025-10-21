import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const UploadPicks = () => {
  const [picksText, setPicksText] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [error, setError] = useState('');

  // GitHub token from environment variable
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!picksText.trim()) {
      setError('Please enter your picks before uploading.');
      return;
    }

    setUploading(true);
    setError('');
    setUploadStatus(null);

    try {
      if (!GITHUB_TOKEN) {
        throw new Error('Upload configuration is missing. Please contact the administrator.');
      }

      // Create filename with timestamp
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `picks_${timestamp}.txt`;
      
      // Create a GitHub Gist
      const response = await fetch('https://api.github.com/gists', {
        method: 'POST',
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: `Fight Picks - ${new Date().toLocaleString()}`,
          public: false,
          files: {
            [filename]: {
              content: picksText
            }
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setUploadStatus({
          type: 'success',
          message: `Picks uploaded successfully! Gist ID: ${data.id}`,
        });
        setPicksText('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || `Upload failed with status: ${response.status}`);
      }
    } catch (err) {
      setError(`Upload failed: ${err.message}`);
      setUploadStatus({
        type: 'error',
        message: 'Failed to upload picks. Please try again.',
      });
    } finally {
      setUploading(false);
    }
  };

  // Upload screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-bg to-primary-red/10 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-medium-text hover:text-light-text mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="glass-effect p-8 rounded-2xl border border-white/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-red/20 to-accent-gold/20 border border-primary-red/30 flex items-center justify-center">
              <Upload className="w-6 h-6 text-primary-red" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-light-text">Upload Your Picks</h1>
              <p className="text-medium-text">Add your fight predictions to the system</p>
            </div>
          </div>

          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label htmlFor="picks" className="block text-sm font-medium text-light-text mb-2">
                Your Picks
              </label>
              <textarea
                id="picks"
                value={picksText}
                onChange={(e) => setPicksText(e.target.value)}
                className="w-full h-64 px-4 py-3 bg-dark-bg/50 border border-white/10 rounded-lg text-light-text placeholder-medium-text focus:outline-none focus:border-primary-red/50 focus:ring-2 focus:ring-primary-red/20 transition-all resize-none font-mono text-sm"
                placeholder="Enter your fight picks here...&#10;&#10;Example:&#10;Fighter A vs Fighter B - Fighter A by Decision&#10;Fighter C vs Fighter D - Fighter C by KO Round 2"
                required
              />
              <p className="mt-2 text-xs text-medium-text">
                Enter your predictions in any format. The file will be saved with a timestamp.
              </p>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {uploadStatus && (
              <div className={`flex items-center gap-2 p-4 rounded-lg ${
                uploadStatus.type === 'success' 
                  ? 'bg-success-green/10 border border-success-green/30' 
                  : 'bg-red-500/10 border border-red-500/30'
              }`}>
                {uploadStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
                <p className={`text-sm ${
                  uploadStatus.type === 'success' ? 'text-success-green' : 'text-red-400'
                }`}>
                  {uploadStatus.message}
                </p>
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={uploading || !picksText.trim()}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-primary-red rounded-lg font-bold text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {uploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Upload Picks
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setPicksText('');
                  setUploadStatus(null);
                  setError('');
                }}
                className="px-6 py-3 border border-white/10 hover:border-white/20 rounded-lg font-medium text-light-text transition-all"
              >
                Clear
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-sm font-semibold text-light-text mb-3">Tips:</h3>
            <ul className="space-y-2 text-sm text-medium-text">
              <li className="flex items-start gap-2">
                <span className="text-primary-red mt-0.5">•</span>
                <span>Files are automatically saved with timestamps for easy tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-red mt-0.5">•</span>
                <span>You can format your picks however you like - plain text works best</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-red mt-0.5">•</span>
                <span>All uploads are stored as private GitHub Gists</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPicks;
