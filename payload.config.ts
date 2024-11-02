import path from 'path'
import { en } from 'payload/i18n/en'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Posts } from '@/collections/Posts'
import Categories from '@/collections/Categories'
import { Settings } from '@/globals/Settings'
import { Services } from '@/globals/Services'
import { Contacts } from '@/globals/Contacts'
import { Header } from '@/globals/Header'
import { Footer } from '@/globals/Footer'
import { Barbers } from '@/globals/Barbers'
import { Reviews } from '@/globals/Reviews'
import { Schedule } from '@/globals/Schedule'
import { AcademyTeachers } from '@/globals/AcademyTeachers'
import { AcademyProgram } from '@/globals/AcademyProgram'
import { Account } from '@/globals/Account'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { Socials } from '@/globals/Socials'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import * as process from "process";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Pages, Posts, Categories],
  globals: [
    Settings,
    Services,
    Contacts,
    Header,
    Footer,
    Barbers,
    Reviews,
    Schedule,
    AcademyTeachers,
    AcademyProgram,
    Account,
    Socials,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  i18n: {
    supportedLanguages: { en },
  },
  plugins: [
    seoPlugin({
      collections: ['pages', 'posts', 'projects'],
      generateTitle: () => 'Site1',
      uploadsCollection: 'media',
      generateDescription: ({ doc }) => 'doc.excerpt',
    }),
    uploadthingStorage({
      collections: {
        ['media']: true,
      },
      options: {
        apiKey: process.env.UPLOADTHING_SEKRET_KEY,
        acl: 'public-read',
      },
    }),
  ],
  sharp,
})
