import { Fragment } from 'react'
import { CheckIcon, MinusIcon, PlusIcon } from '@heroicons/react/16/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { LandingPageComponent } from '@/components/landing-page'

const tiers = [
  {
    name: 'Starter',
    description: 'Everything you need to get started.',
    priceMonthly: '$19',
    href: '#',
    highlights: [
      { description: 'Custom domains' },
      { description: 'Edge content delivery' },
      { description: 'Advanced analytics' },
      { description: 'Quarterly workshops', disabled: true },
      { description: 'Single sign-on (SSO)', disabled: true },
      { description: 'Priority phone support', disabled: true },
    ],
  },
  {
    name: 'Growth',
    description: 'All the extras for your growing team.',
    priceMonthly: '$49',
    href: '#',
    highlights: [
      { description: 'Custom domains' },
      { description: 'Edge content delivery' },
      { description: 'Advanced analytics' },
      { description: 'Quarterly workshops' },
      { description: 'Single sign-on (SSO)', disabled: true },
      { description: 'Priority phone support', disabled: true },
    ],
  },
  {
    name: 'Scale',
    description: 'Added flexibility at scale.',
    priceMonthly: '$99',
    href: '#',
    highlights: [
      { description: 'Custom domains' },
      { description: 'Edge content delivery' },
      { description: 'Advanced analytics' },
      { description: 'Quarterly workshops' },
      { description: 'Single sign-on (SSO)' },
      { description: 'Priority phone support' },
    ],
  },
]
const sections = [
  {
    name: 'Features',
    features: [
      { name: 'Edge content delivery', tiers: { Starter: true, Growth: true, Scale: true } },
      { name: 'Custom domains', tiers: { Starter: '1', Growth: '3', Scale: 'Unlimited' } },
      { name: 'Team members', tiers: { Starter: '3', Growth: '20', Scale: 'Unlimited' } },
      { name: 'Single sign-on (SSO)', tiers: { Starter: false, Growth: false, Scale: true } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Advanced analytics', tiers: { Starter: true, Growth: true, Scale: true } },
      { name: 'Basic reports', tiers: { Starter: false, Growth: true, Scale: true } },
      { name: 'Professional reports', tiers: { Starter: false, Growth: false, Scale: true } },
      { name: 'Custom report builder', tiers: { Starter: false, Growth: false, Scale: true } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: '24/7 online support', tiers: { Starter: true, Growth: true, Scale: true } },
      { name: 'Quarterly workshops', tiers: { Starter: false, Growth: true, Scale: true } },
      { name: 'Priority phone support', tiers: { Starter: false, Growth: false, Scale: true } },
      { name: '1:1 onboarding tour', tiers: { Starter: false, Growth: false, Scale: true } },
    ],
  },
]

export default function Example() {
  return (
    <LandingPageComponent/>
  )
}