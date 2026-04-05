"use client"

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Facebook,
  Instagram,
  SearchIcon,
  Whatsapp,
} from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [hash, setHash] = useState<string>();
  // const searchParams = useSearchParams();
  // const keyword = (searchParams.get("keyword") ?? "").trim();
  const keyword = "";

  const router = useRouter();

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash.replace('#', ''));
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isMac, setIsMac] = useState<boolean | null>(null);

    useEffect(() => {
      setIsMac(navigator.userAgent.toLowerCase().includes("mac"));
    }, []);
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          inputRef.current?.focus();
        }
        if ((e.key.toLowerCase() === 'enter')) {
          setOpen(false);
          inputRef.current?.value.length ?
            router.push(`./search?keyword=${inputRef.current?.value}`)
            : router.push(`/`)
        }
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, []);
    return <Input
      ref={inputRef}
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      defaultValue={keyword}
      endContent={
        isMac === null ? <Kbd className="hidden lg:inline-block">⠀⠀⠀</Kbd> : isMac ? (
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        ) : (
          <Kbd className="hidden lg:inline-block">
            Ctrl K
          </Kbd>
        )
      }
      labelPlacement="outside"
      placeholder="Cari..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  };

  const InstagramButton = () => {
    return <Link isExternal href="https://instagram.com/agemon.id" title="Instagram" className="mx-1 hover:opacity-80 cursor-pointer transition-opacity">
      <Instagram size={22} className="text-default-500" />
    </Link>
  }

  const WhatsappButton = () => {
    return <Link isExternal href="https://wa.me/message/EU2TRMLX3TJYN1" title="Whatsapp" className="mx-1 hover:opacity-80 cursor-pointer transition-opacity">
      <Whatsapp size={22} className="text-default-500" />
    </Link>
  }

  const FacebookButton = () => {
    return <Link isExternal href="https://www.facebook.com/share/1CfRt25Mwa/?mibextid=wwXIfr" title="Facebook" className="mx-1 hover:opacity-80 cursor-pointer transition-opacity">
      <Facebook size={22} className="text-default-500" />
    </Link>
  }

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" isMenuOpen={isOpen} onMenuOpenChange={setOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            window.location.pathname != '/' ?
              router.replace('/')
              : window.history.replaceState(null, '', '/');
            setHash('');
          }}>
            <div className="bg-[url('/logo.webp')] w-[80px] h-[28px] bg-contain bg-no-repeat pointer-events-none select-none inline-block" />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  item.href.replace('./#', '') === hash ? "text-primary font-medium" : "",
                )}
                color="foreground"
                href={item.href}
                onClick={() => {
                  item.href.startsWith('./#') ?
                    setHash(item.href.replace('./#', ''))
                    : setHash('')
                }}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2">
          <FacebookButton />
          <InstagramButton />
          <WhatsappButton />
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex"><SearchInput /></NavbarItem>
        <NavbarMenuToggle className="sm:hidden md:flex lg:hidden flex" />
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <FacebookButton />
        <InstagramButton />
        <WhatsappButton />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="md:hidden">
          <SearchInput />
        </div>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                onClick={() => {
                  setOpen(false)
                  item.href.startsWith('./#') ?
                    setHash(item.href.replace('./#', ''))
                    : setHash('')
                }}
                color={
                  item.href.replace('./#', '') === hash ? "primary" : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
