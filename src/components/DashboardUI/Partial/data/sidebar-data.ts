import {
  AudioWaveform,
  BlocksIcon,
  BugIcon,
  Command,
  EditIcon,
  GalleryVerticalEnd,
  HandPlatter,
  HelpingHand,
  LayoutDashboard,
  LockIcon,
  Notebook,
  PanelTopClose,
  Server,
  Settings,
  ShoppingCart,
  SoapDispenserDroplet,
  User2,
  UserCheck,
} from "lucide-react";
import { type SidebarData } from "../types";

export const sidebarData: SidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Shadcn Admin",
      logo: Command,
      plan: "Vite + ShadcnUI",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Category",
          icon: EditIcon,
          items: [
            {
              title: "All Categories",
              url: "/dashboard/categories",
            },
            {
              title: "Add Category",
              url: "/dashboard/categories/add",
            },
          ],
        },
        {
          title: "SubCategory",
          icon: EditIcon,
          items: [
            {
              title: "All SubCategories",
              url: "/dashboard/subcategories",
            },
            {
              title: "Add SubCategory",
              url: "/dashboard/subcategories/add",
            },
          ],
        },
        {
          title: "Products",
          icon: ShoppingCart,
          items: [
            {
              title: "All Products",
              url: "/dashboard/products",
            },
            {
              title: "Add Product",
              url: "/dashboard/products/add",
            },
          ],
        },
        {
          title: "Orders",
          icon: ShoppingCart,
          items: [
            {
              title: "All Orders",
              url: "/dashboard/orders",
            },
            {
              title: "Add Order",
              url: "/dashboard/orders/add",
            },
          ],
        },
        // {
        //   title: "Chats",
        //   url: "/chats",
        //   badge: "3",
        //   icon: MessageCircle,
        // },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Auth",
          icon: LockIcon,
          items: [
            {
              title: "Sign In",
              url: "/sign-in",
            },
            {
              title: "Sign In (2 Col)",
              url: "/sign-in-2",
            },
            {
              title: "Sign Up",
              url: "/sign-up",
            },
            {
              title: "Forgot Password",
              url: "/forgot-password",
            },
            {
              title: "OTP",
              url: "/otp",
            },
          ],
        },
        {
          title: "Errors",
          icon: BugIcon,
          items: [
            {
              title: "Unauthorized",
              url: "/401",
              icon: LockIcon,
            },
            {
              title: "Forbidden",
              url: "/403",
              icon: UserCheck,
            },
            {
              title: "Not Found",
              url: "/404",
              icon: BugIcon,
            },
            {
              title: "Internal Server Error",
              url: "/500",
              icon: Server,
            },
            {
              title: "Maintenance Error",
              url: "/503",
              icon: BlocksIcon,
            },
          ],
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: Settings,
          items: [
            {
              title: "Profile",
              url: "/settings",
              icon: User2,
            },
            {
              title: "Account",
              url: "/settings/account",
              icon: PanelTopClose,
            },
            {
              title: "Appearance",
              url: "/settings/appearance",
              icon: HandPlatter,
            },
            {
              title: "Notifications",
              url: "/settings/notifications",
              icon: Notebook,
            },
            {
              title: "Display",
              url: "/settings/display",
              icon: SoapDispenserDroplet,
            },
          ],
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: HelpingHand,
        },
      ],
    },
  ],
};
