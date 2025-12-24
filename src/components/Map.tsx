import { siteContent } from '../data/content';

const Map = () => {
  const mapEmbedUrl =
    'https://www.google.com/maps?q=38+High+Street,+Hampton+Hill,+TW12+1PD,+United+Kingdom&output=embed';

  return (
    <div className="w-full">
      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Body First UK Location Map"
        />
      </div>

      <div className="mt-6 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-3 text-gray-900">Visit Us</h3>
        <address className="not-italic text-gray-700 space-y-1">
          <p>{siteContent.company.address.street}</p>
          <p>{siteContent.company.address.city}</p>
          <p>{siteContent.company.address.place}</p>
          <p>{siteContent.company.address.country}</p>
        </address>
      </div>
    </div>
  );
};

export default Map;
