/**
 * @type {import('next').NextConfig}
 */
const path = require('path')

const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/assets/scss')],
    },
}

module.exports = nextConfig