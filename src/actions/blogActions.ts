'use server';

import fs from 'fs/promises';
import path from 'path';
import { BlogPost } from '@/data/blogs';

export async function addBlog(newBlog: BlogPost) {
    try {
        const filePath = path.join(process.cwd(), 'src/data/blogs.ts');
        const fileContent = await fs.readFile(filePath, 'utf-8');

        // Find the end of the array
        const arrayEndIndex = fileContent.lastIndexOf('];');

        if (arrayEndIndex === -1) {
            throw new Error('Could not find the end of the blogs array.');
        }

        // Format the new blog object as a string
        // We use JSON.stringify but then remove the outer braces to insert it cleanly if needed,
        // or just rely on the fact that valid JSON object syntax is valid JS object syntax (mostly).
        const blogString = JSON.stringify(newBlog, null, 4);

        // check if there are other items to add a comma
        const insertContent = `    ${blogString},\n`;

        const newContent = fileContent.slice(0, arrayEndIndex) + insertContent + fileContent.slice(arrayEndIndex);

        await fs.writeFile(filePath, newContent, 'utf-8');
        return { success: true };
    } catch (error) {
        console.error('Failed to add blog:', error);
        return { success: false, error: 'Failed to save blog to file.' };
    }
}
export async function deleteBlog(slug: string) {
    try {
        const filePath = path.join(process.cwd(), 'src/data/blogs.ts');
        const fileContent = await fs.readFile(filePath, 'utf-8');

        const arrayStartMarker = 'export const defaultBlogs: BlogPost[] = [';
        const arrayEndMarker = '];';

        const startIndex = fileContent.indexOf(arrayStartMarker);
        const endIndex = fileContent.lastIndexOf(arrayEndMarker);

        if (startIndex === -1 || endIndex === -1) {
            throw new Error('Could not find the blogs array in the file.');
        }

        const beforeArray = fileContent.slice(0, startIndex + arrayStartMarker.length);
        const afterArray = fileContent.slice(endIndex);
        const arrayContent = fileContent.slice(startIndex + arrayStartMarker.length, endIndex);

        // Regex to match individual blog objects in the array
        const regex = /\{[\s\S]*?\}\s*(?=,|\s*\])/g;
        const matches = arrayContent.match(regex) || [];

        const keptMatches = matches.filter(match => {
            // Match by slug
            const slugMatch = match.match(/"slug":\s*"([^"]+)"/) ||
                match.match(/'slug':\s*'([^']+)'/) ||
                match.match(/slug:\s*"([^"]+)"/) ||
                match.match(/slug:\s*'([^']+)'/);
            return slugMatch ? slugMatch[1] !== slug : true;
        });

        const newArrayContent = '\n' + keptMatches.join(',\n') + (keptMatches.length > 0 ? ',\n' : '\n');
        const newFileContent = beforeArray + newArrayContent + afterArray;

        await fs.writeFile(filePath, newFileContent, 'utf-8');
        return { success: true };
    } catch (error) {
        console.error('Failed to delete blog:', error);
        return { success: false, error: 'Failed to delete blog from file.' };
    }
}

export async function updateBlog(oldSlug: string, updatedBlog: BlogPost) {
    try {
        const filePath = path.join(process.cwd(), 'src/data/blogs.ts');
        const fileContent = await fs.readFile(filePath, 'utf-8');

        const arrayStartMarker = 'export const defaultBlogs: BlogPost[] = [';
        const arrayEndMarker = '];';

        const startIndex = fileContent.indexOf(arrayStartMarker);
        const endIndex = fileContent.lastIndexOf(arrayEndMarker);

        if (startIndex === -1 || endIndex === -1) {
            throw new Error('Could not find the blogs array in the file.');
        }

        const beforeArray = fileContent.slice(0, startIndex + arrayStartMarker.length);
        const afterArray = fileContent.slice(endIndex);
        const arrayContent = fileContent.slice(startIndex + arrayStartMarker.length, endIndex);

        const regex = /\{[\s\S]*?\}\s*(?=,|\s*\])/g;
        const matches = arrayContent.match(regex) || [];

        const updatedMatches = matches.map(match => {
            const slugMatch = match.match(/"slug":\s*"([^"]+)"/) ||
                match.match(/'slug':\s*'([^']+)'/) ||
                match.match(/slug:\s*"([^"]+)"/) ||
                match.match(/slug:\s*'([^']+)'/);

            if (slugMatch && slugMatch[1] === oldSlug) {
                return JSON.stringify(updatedBlog, null, 4);
            }
            return match;
        });

        const newArrayContent = '\n' + updatedMatches.join(',\n') + (updatedMatches.length > 0 ? ',\n' : '\n');
        const newFileContent = beforeArray + newArrayContent + afterArray;

        await fs.writeFile(filePath, newFileContent, 'utf-8');
        return { success: true };
    } catch (error) {
        console.error('Failed to update blog:', error);
        return { success: false, error: 'Failed to update blog in file.' };
    }
}
