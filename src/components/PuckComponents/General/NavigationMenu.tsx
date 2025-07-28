'use client'
import { CircleIcon } from 'lucide-react'
import Link from 'next/link'
import { PuckConfigurationType } from '../types'

export interface NavigationMenuProps {
  leftColumn: any
  rightColumn: any
  menu: {
    label: string
    href: string | null
    submenu: {
      label: string
      href: string | null
      icon?: string | null
      description?: string | null
    }[]
  }[]
}

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export const PuckNavigationMenuConfiguration: PuckConfigurationType<NavigationMenuProps> = {
  fields: {
    leftColumn: { type: 'slot' },
    rightColumn: { type: 'slot' },
    menu: {
      type: 'array',
      arrayFields: {
        label: { type: 'text' },
        href: { type: 'text' },
        submenu: {
          type: 'array',
          arrayFields: {
            label: { type: 'text' },
            href: { type: 'text' },
            icon: { type: 'text' },
            description: { type: 'text' },
          },
        },
      },
    },
  },
  render: ({ leftColumn: LeftColumn, rightColumn: RightColumn, menu = [], puck }) => {
    return (
      <div style={{ display: 'flex', gap: 16 }}>
        <div className={`${puck.isEditing && 'min-w-5'}`}>
          <LeftColumn />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {menu?.map((item, idx) => (
              <NavigationMenuItem key={idx}>
                {item?.submenu?.length ? (
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                ) : (
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={item.href || ''}>{item.label}</Link>
                  </NavigationMenuLink>
                )}
                {item?.submenu?.length && (
                  <NavigationMenuContent>
                    <ul
                      className={
                        item?.submenu?.some((l) => l.description)
                          ? 'grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
                          : 'grid w-[200px] gap-4'
                      }
                    >
                      {item?.submenu?.map((link, i) => (
                        <li key={i}>
                          <NavigationMenuLink asChild>
                            <Link href={link.href || ''}>
                              <div>
                                {link.icon && <CircleIcon className="mr-2 inline-block" />}
                                <div className="font-medium">{link.label}</div>
                                {link.description && (
                                  <p className="text-muted-foreground text-sm leading-snug">
                                    {link.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className={`${puck.isEditing && 'min-p-5'}`}>
          <RightColumn />
        </div>
      </div>
    )
  },
}
