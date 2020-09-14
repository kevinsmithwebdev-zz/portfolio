const baseURL = 'https://kswd-portfolio.s3-us-west-1.amazonaws.com';

const toLowerSlug = (str: string) => str.replace(/\s+/g, '').toLowerCase();

export const getGalleryImageURL = (slug: string): string => `${baseURL}/images/gallery/${slug}.png`;

export const getGalleryTNImageURL = (slug: string): string => `${baseURL}/images/gallery/${slug}-tn.png`;

export const getSkillLogoURL = (slug: string): string => `${baseURL}/images/skillLogos/${toLowerSlug(slug)}.png`;

type DocsURLObjType = {
  resume: string,
  cover: string,
}

export const docsURLObj: DocsURLObjType = {
  resume: `${baseURL}/resume/Kevin Smith - Resume.pdf`,
  cover: `${baseURL}/resume/Kevin Smith - Cover Letter.pdf`,
};
