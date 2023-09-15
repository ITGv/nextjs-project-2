import * as React from "react";
import { Button, Container } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from '@mui/icons-material/Search';
export default function Header() {
  return (
    <div className="flex flex-row justify-items-center bg-slate-400">
        <button
          type="submit"
          className=" w-1/4 bg-cover bg-no-repeat bg-center bg-[url('/img/agence.png')]"
        ></button>
      <div className="flex gap-8 w-1/3 place-content-center text-white ">
        <button type="submit">HOME</button>
        <button type="submit">ABOUT US</button>
        <button type="submit">PAGE</button>
        <button type="submit">BLOG</button>
        <button type="submit">CONTACT</button>
      </div>
        <Container className="flex place-content-start m-auto w-1/3" maxWidth="md" sx={{ mt: 8 }}>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <TwitterIcon></TwitterIcon>
          </IconButton>
          <IconButton>
            <YouTubeIcon></YouTubeIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <Button className="bg-red-600 rounded-2xl"> GET A QUOTE</Button>
        </Container>
    </div>
  );
}
