import * as React from 'react';
import {
    AspectRatio, Box, Button, Divider, FormControl, FormLabel, Input, IconButton, Stack,
    Select, Option, Typography, Tab, Tabs, TabPanel, TabList, tabClasses, Card, CardActions, CardOverflow
} from '@mui/joy';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


export default function MyProfile() {
    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box
                sx={{
                position: 'sticky',
                top: { sm: -100, md: -110 },
                bgcolor: 'background.body',
                zIndex: 9995,
                }}
            >
                <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
                    <TabList
                        disableUnderline

                        tabFlex={1}
                        size="sm"

                        sx={{
                            p: 0.5,
                            gap: 0.5,
                            borderRadius: 'xl',
                            bgcolor: 'background.surface',
                            [`& .${tabClasses.root}[aria-selected="true"]`]: {
                                fontWeight: '600',
                                boxShadow: 'sm',
                                bgcolor: 'background.level1',
                            },
                        }}
                    >
                        <Tab disableIndicator value={0}>
                            Personal info
                        </Tab>
                        <Tab disableIndicator value={1}>
                            Security
                        </Tab>
                        {/* <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2}>
                        Plan
                        </Tab> */}
                        <Tab disableIndicator value={2}>
                            Billing
                        </Tab>
                    </TabList>
                    <TabPanel value={0}>
                        <Stack
                            spacing={4}
                            sx={{
                            display: 'flex',
                            maxWidth: '800px',
                            mx: 'auto',
                            px: { xs: 2, md: 6 },
                            py: { xs: 2, md: 3 },
                            }}
                        >
                            <Card>
                            <Box sx={{ mb: 1 }}>
                                <Typography level="title-md">Personal info</Typography>
                                <Typography level="body-sm">
                                Customize how your profile information will apper to the networks.
                                </Typography>
                            </Box>
                            <Divider />
                            <Stack
                                direction="row"
                                spacing={3}
                                sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
                            >
                                <Stack direction="column" spacing={1}>
                                <AspectRatio
                                    ratio="1"
                                    maxHeight={200}
                                    sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
                                >
                                    <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                    />
                                </AspectRatio>
                                <IconButton
                                    aria-label="upload new picture"
                                    size="sm"
                                    variant="outlined"
                                    color="neutral"
                                    sx={{
                                    bgcolor: 'background.body',
                                    position: 'absolute',
                                    zIndex: 2,
                                    borderRadius: '50%',
                                    left: 100,
                                    top: 170,
                                    boxShadow: 'sm',
                                    }}
                                >
                                    <EditRoundedIcon />
                                </IconButton>
                                </Stack>
                                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                                <Stack spacing={1}>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl
                                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                                    >
                                    <Input size="sm" placeholder="First name" />
                                    <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input size="sm" defaultValue="UI Developer" />
                                    </FormControl>
                                    <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="sm"
                                        type="email"
                                        startDecorator={<EmailRoundedIcon />}
                                        placeholder="email"
                                        defaultValue="siriwatk@test.com"
                                        sx={{ flexGrow: 1 }}
                                    />
                                    </FormControl>
                                </Stack>
                                <div>
                                    {/* <CountrySelector /> */}
                                </div>
                                <div>
                                    <FormControl sx={{ display: { sm: 'contents' } }}>
                                    <FormLabel>Timezone</FormLabel>
                                    <Select
                                        size="sm"
                                        startDecorator={<AccessTimeFilledRoundedIcon />}
                                        defaultValue="1"
                                    >
                                        <Option value="1">
                                        Indochina Time (Bangkok){' '}
                                        <Typography textColor="text.tertiary" ml={0.5}>
                                            — GMT+07:00
                                        </Typography>
                                        </Option>
                                        <Option value="2">
                                        Indochina Time (Ho Chi Minh City){' '}
                                        <Typography textColor="text.tertiary" ml={0.5}>
                                            — GMT+07:00
                                        </Typography>
                                        </Option>
                                    </Select>
                                    </FormControl>
                                </div>
                                </Stack>
                            </Stack>
                            <Stack
                                direction="column"
                                spacing={2}
                                sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
                            >
                                <Stack direction="row" spacing={2}>
                                <Stack direction="column" spacing={1}>
                                    <AspectRatio
                                    ratio="1"
                                    maxHeight={108}
                                    sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                                    >
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                    />
                                    </AspectRatio>
                                    <IconButton
                                    aria-label="upload new picture"
                                    size="sm"
                                    variant="outlined"
                                    color="neutral"
                                    sx={{
                                        bgcolor: 'background.body',
                                        position: 'absolute',
                                        zIndex: 2,
                                        borderRadius: '50%',
                                        left: 85,
                                        top: 180,
                                        boxShadow: 'sm',
                                    }}
                                    >
                                    <EditRoundedIcon />
                                    </IconButton>
                                </Stack>
                                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl
                                    sx={{
                                        display: {
                                        sm: 'flex-column',
                                        md: 'flex-row',
                                        },
                                        gap: 2,
                                    }}
                                    >
                                    <Input size="sm" placeholder="First name" />
                                    <Input size="sm" placeholder="Last name" />
                                    </FormControl>
                                </Stack>
                                </Stack>
                                <FormControl>
                                <FormLabel>Role</FormLabel>
                                <Input size="sm" defaultValue="UI Developer" />
                                </FormControl>
                                <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    size="sm"
                                    type="email"
                                    startDecorator={<EmailRoundedIcon />}
                                    placeholder="email"
                                    defaultValue="siriwatk@test.com"
                                    sx={{ flexGrow: 1 }}
                                />
                                </FormControl>
                                <div>
                                {/* <CountrySelector /> */}
                                </div>
                                <div>
                                <FormControl sx={{ display: { sm: 'contents' } }}>
                                    <FormLabel>Timezone</FormLabel>
                                    <Select
                                    size="sm"
                                    startDecorator={<AccessTimeFilledRoundedIcon />}
                                    defaultValue="1"
                                    >
                                    <Option value="1">
                                        Indochina Time (Bangkok){' '}
                                        <Typography textColor="text.tertiary" ml={0.5}>
                                        — GMT+07:00
                                        </Typography>
                                    </Option>
                                    <Option value="2">
                                        Indochina Time (Ho Chi Minh City){' '}
                                        <Typography textColor="text.tertiary" ml={0.5}>
                                        — GMT+07:00
                                        </Typography>
                                    </Option>
                                    </Select>
                                </FormControl>
                                </div>
                            </Stack>
                            <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                                <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                                <Button size="sm" variant="outlined" color="neutral">
                                    Cancel
                                </Button>
                                <Button size="sm" variant="solid">
                                    Save
                                </Button>
                                </CardActions>
                            </CardOverflow>
                            </Card>
                        </Stack>
                    </TabPanel>

                    <TabPanel value={1}>
                        <b>Second</b> tab panel
                    </TabPanel>
                    
                    <TabPanel value={2}>
                        <b>Third</b> tab panel
                    </TabPanel>
                </Tabs>
            </Box>
        </Box>
    );
}